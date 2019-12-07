import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Index, OneToMany, Column } from "typeorm"
import { IsString, IsBoolean, MinLength } from "class-validator"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ comment: "曾经的梦想", type: "varchar", default: "旅行家", length: 200 })
  // @IsString({ message: "梦想只能是字符串"})
  // @MinLength(1, { message: "输入不能为空"})
  public dream !: string

  @Column({ comment: "现在的职业", type: "varchar", default: "程序猿", length: 200 })
  // @IsString({ message: "职业只能是字符串"})
  // @MinLength(1, { message: "输入不能为空"})
  public career!: string

  @Column({ comment: "是否满意现状", default: 1 })
  public ifSatisfied!: boolean

  @Column({ comment: "是否继续追梦", default: 1 })
  public ifContinue!: boolean

  @Column({ comment: "是否实现了梦想", default: 1})
  public realize!: boolean

  @Column({ comment: "海报的url", type: "varchar", default: "abc", length: 500})
  // @IsString({ message: "字符串"})
  public posterUrl!: string

  @Column({ comment: "用户昵称", type: "varchar"})
  public nickName!: string

  @Column({ comment: "头像url", type: "varchar"})
  public avatarUrl!: string

  @Column({ comment: "union id", type: "varchar"})
  public unionid!: string

  @Column({ comment: "励志短语", default: "每个人都有梦想，不是吗？", type: "varchar"})
  public phrase!: string

  @CreateDateColumn({ comment: "创建时间" })
  public createdAt!: Date

  @UpdateDateColumn({ comment: "更新时间" })
  public updatedAt!: Date

}
