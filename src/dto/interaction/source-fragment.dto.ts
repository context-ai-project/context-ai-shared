/**
 * DTO para un fragmento de fuente citada en una respuesta
 */
export class SourceFragmentDto {
  fragmentId!: string;
  sourceId!: string;
  sourceTitle!: string;
  content!: string;
  relevanceScore!: number;
  metadata?: Record<string, any>;
}

