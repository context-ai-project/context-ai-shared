import { MessageDto } from './message.dto';
import { SourceFragmentDto } from './source-fragment.dto';

/**
 * DTO de respuesta para una consulta al chat
 */
export class ChatResponseDto {
  userMessage!: MessageDto;
  assistantMessage!: MessageDto;
  conversationId!: string;
  sources!: SourceFragmentDto[];
}

