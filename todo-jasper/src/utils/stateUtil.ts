export class StateUtil {

      private static instance: StateUtil;

      private showCompleted: boolean;

      private constructor(private serviceName = "StateUtil") {
            this.showCompleted = false;
      }

      public static getInstance(): StateUtil {
            if (!StateUtil.instance) {
                  StateUtil.instance = new StateUtil();
            }
            return StateUtil.instance;
      }

      public getShowCompleted(): boolean {
            return this.showCompleted;
      }

      public switchShowCompleted(): void {
            this.showCompleted = !this.showCompleted;
      }

}