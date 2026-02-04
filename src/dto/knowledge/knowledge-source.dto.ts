import { SourceType, SourceStatus } from '../../types/enums';

/**
 * DTO de respuesta para una fuente de conocimiento
 */
export class KnowledgeSourceDto {
  id!: string;
  sectorId!: string;
  title!: string;
  sourceType!: SourceType;
  status!: SourceStatus;
  fileName?: string;
  fileSize?: number;
  fragmentCount?: number;
  uploadedBy!: string;
  uploadedAt!: Date;
  indexedAt?: Date;
  metadata?: Record<string, any>;
}

