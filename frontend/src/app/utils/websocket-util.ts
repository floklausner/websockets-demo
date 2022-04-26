import {Subject} from "rxjs";
import {webSocket, WebSocketSubject} from "rxjs/webSocket";

export class WebSocketUtil<T> {
  public messages: Subject<T>
  public errorMessages: Subject<any>
  public sessionId: number
  public socket: WebSocketSubject<T> | null

  constructor() {
    this.messages = new Subject<T>();
    this.errorMessages = new Subject();
    this.sessionId = Date.now();
    this.socket = null;
  }

  public connect(): void {
    this.socket = webSocket<T>({
      url: "ws://localhost:8080/start-websocket/" + this.sessionId,
      deserializer: msg => msg.data
    })

    this.socket.subscribe({
      next: msg => this.messages.next(msg),
      error: err => this.errorMessages.next(err)
    })
  }

  public sendMessage(message: T): void {
    if (this.socket) {
      this.socket.next(message);
    }
  }
}


