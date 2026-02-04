import { MessageRole } from '../../types/enums';
import { SourceFragmentDto } from './source-fragment.dto';

/**
 * DTO para un mensaje en una conversación
 */
export class MessageDto {
  id!: string;
  conversationId!: string;
  role!: MessageRole;
  content!: string;
  sourcesUsed?: SourceFragmentDto[];
  sentimentScore?: number;
  metadata?: Record<string, any>;
  createdAt!: Date;
}

