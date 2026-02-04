import { IsString, IsOptional, IsNotEmpty, IsUUID } from 'class-validator';

/**
 * DTO para enviar una consulta al asistente de IA
 */
export class ChatQueryDto {
  @IsOptional()
  @IsUUID()
  conversationId?: string;

  @IsString()
  @IsNotEmpty()
  sectorId!: string;

  @IsString()
  @IsNotEmpty()
  message!: string;
}

