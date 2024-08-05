import { Module } from "@nestjs/common";
import { SessionTemplateController } from "./session-template.controller";


@Module({
    controllers: [SessionTemplateController],
    providers: []
})

export class SessionTemplateModule { }