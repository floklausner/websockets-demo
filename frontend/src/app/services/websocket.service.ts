import { Injectable } from '@angular/core';
import {WebSocketUtil} from "../utils/websocket-util";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocketUtil<string> | null

  constructor() {
    this.socket = null
  }

  public getSessionId(): number | undefined {
    return this.socket?.sessionId
  }

  connect(): Observable<string> {
    if (!this.socket) {
      this.socket = new WebSocketUtil()
      this.socket.connect()

      this.socket.errorMessages.subscribe(value => {
        console.log(value);
      })
    }
    return this.socket.messages
  }

  sendMessage(message: string): void {
    this.socket?.sendMessage(message)
  }
}
