export class StateUtil {

      private static instance: StateUtil;

      private showCompleted: boolean;

      private keyword: string;

      private constructor(private serviceName = "StateUtil") {
            this.showCompleted = false;
            this.keyword = "";
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

      public setKeyWord(input: string): void {
            this.keyword = input;
      }

      public getKeyWord(): string {
            return this.keyword;
      }

}