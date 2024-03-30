import { Type } from "@nestjs/common";
import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaType } from "mongoose";

Schema()
export class AbstractDocument{
    @Prop({type: SchemaTypes.ObjectId})
    _id: Types.ObjectId;
}