/**
 * DTO para un fragmento de documento
 */
export class FragmentDto {
  id!: string;
  sourceId!: string;
  content!: string;
  position!: number;
  tokenCount!: number;
  metadata?: Record<string, any>;
}

