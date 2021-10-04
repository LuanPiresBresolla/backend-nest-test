import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('ChatGateway');

  @WebSocketServer() server: Server;

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): void {
    this.server.emit('msgToClient', 'Testando socket', client.id);
  }

  afterInit(server: Server) {
    this.logger.log('Server IO started 🚀')
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client ID connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client ID disconnected: ${client.id}`);
  }
}
