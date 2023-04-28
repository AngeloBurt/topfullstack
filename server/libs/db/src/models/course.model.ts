// import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程名称', example: 'user1' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图', example: 'pas1' })
  @prop()
  cover: string;

  // @arrayProp({ itemsRef: 'Episode' })
  @prop({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[];
}
