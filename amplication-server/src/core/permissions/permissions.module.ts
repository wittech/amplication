import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PrismaModule } from '../../services/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PermissionsService],
  exports: [PermissionsService]
})
export class PermissionsModule {}
