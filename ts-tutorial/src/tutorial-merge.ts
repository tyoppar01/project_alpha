interface Customer {
    save(): void
}

class Customer {}

const customer = new Customer()
customer.save = function() {}