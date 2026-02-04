import { IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { SourceType } from '../../types/enums';

/**
 * DTO para subir/ingerir un documento
 */
export class IngestDocumentDto {
  @IsString()
  @IsNotEmpty()
  sectorId!: string;

  @IsEnum(SourceType)
  sourceType!: SourceType;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  metadata?: Record<string, any>;
}

