export class PomodoroTimer {
  private totalTime = 25 * 60;
  private remainingTime = this.totalTime;
  private intervalId: number | null = null;
  private isRunning = false;

  private circle: SVGCircleElement;
  private display: HTMLDivElement;

  constructor() {
    this.circle = document.querySelector(".progress-ring__circle") as SVGCircleElement;
    this.display = document.querySelector(".timer-display") as HTMLDivElement;
    this.updateDisplay();
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = window.setInterval(() => this.tick(), 1000);
  }

  public pause(): void {
    this.isRunning = false;
    if (this.intervalId) clearInterval(this.intervalId);
  }

  public reset(): void {
    this.pause();
    this.remainingTime = this.totalTime;
    this.updateDisplay();
    this.updateCircle();
  }

  private tick(): void {
    if (this.remainingTime > 0) {
      this.remainingTime--;
      this.updateDisplay();
      this.updateCircle();
    } else {
      this.pause();
      alert("🍅 Pomodoro session complete!");
    }
  }

  private updateDisplay(): void {
    const m = Math.floor(this.remainingTime / 60);
    const s = this.remainingTime % 60;
    this.display.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  private updateCircle(): void {
    const radius = this.circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.remainingTime / this.totalTime) * circumference;
    this.circle.style.strokeDasharray = `${circumference}`;
    this.circle.style.strokeDashoffset = `${offset}`;
  }
}
