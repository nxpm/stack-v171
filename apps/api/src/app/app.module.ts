import { ApiFeatureAuthModule } from '@stack-v171/api/feature-auth'
import { ApiFeatureCoreModule } from '@stack-v171/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
