interface Contact {
  id: number;
}

const currentUser = {
  id: 1234,
  roles: ["ContactEditor"],
  isAuthenticated(): boolean {
    return true;
  },
  isInRole(role: string): boolean {
    return this.roles.contains(role);
  },
};

function freeze(target: Function) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}

function singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class Singleton extends constructor {
    static _instance = null;

    constructor(...args) {
      super(...args);

      if (Singleton._instance) {
        throw Error("Duplicted Instance");
      }
      Singleton._instance = this;
    }
  };
}

function authorize(role: string) {
  return function authorizeDecorator(
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    const wrapped = descriptor.value;

    descriptor.value = function () {
      if (!currentUser.isAuthenticated()) {
        throw Error("User not authenticated");
      }
      if (!currentUser.isInRole(role)) {
        throw Error(`User not in role of ${role}`);
      }
      return wrapped.apply(this, arguments);
    };
  };
}

/** auditable function in decorator file */
function auditable(target: object, key: string | symbol) {
      // get the init val, before the decorator is applied
      let val = target[key];

      // overwrite prop with custom getter/setter
      Object.defineProperty(target, key, {
            get: () => val,
            set: (newVal) => {
                  console.log(`${key.toString()} has changed`, newVal);
                  val = newVal;
            },
            enumerable: true,
            configurable: true
      })
}

@freeze
@singleton
class ContactRepository {
      @auditable
      private contacts: Contact[] = [];

  @authorize("ContactViewer")
  getContactById(id: number): Contact | null {
    if (!currentUser.isInRole("ContactViewer")) {
      throw Error("User not authorized to execute this action");
    }

    const contact = this.contacts.find((x) => x.id === id);

    return contact;
  }

  @authorize("ContentEditor")
  save(contact: Contact): void {
    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}
