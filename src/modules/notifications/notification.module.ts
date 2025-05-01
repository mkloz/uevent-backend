import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@/core/db/db.module';
import { MailModule } from '@/core/mail/mail.module';

import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [DatabaseModule, MailModule, ConfigModule],
  exports: [NotificationService],
})
export class NotificationModule {}
