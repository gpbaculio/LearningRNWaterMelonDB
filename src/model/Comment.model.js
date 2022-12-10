import {Model} from '@nozbe/watermelondb';
import {field, relation, writer} from '@nozbe/watermelondb/decorators';

export class Comment extends Model {
  static table = 'comments';

  static associations = {
    posts: {type: 'belongs_to', key: 'post_id'},
  };

  @field('body')
  body;

  @field('is_nasty')
  isNasty;

  @field('is_pressed')
  isPressed;

  @writer async updateIsPressed(value) {
    await this.update(comment => {
      comment.isPressed = value;
    });
  }

  @relation('posts', 'post_id')
  post;
}
