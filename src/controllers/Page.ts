import { Controller, Get, IContext, Post, BadRequest } from "@aotools/valka"
import { storeData } from "../constraints"

@Controller()
export class PageController {

  @Get("/error", "error.html")
  public async error(ctx: IContext) {
    return {}
  }

  @Get("/vote", "vote.html")
  public async mainPage(ctx: IContext) {
    return { title: "投票页面", data: storeData}
  }

  @Get("/display", "display.html")
  public async showPage(ctx: IContext) {
    return { title: "展示页面", data: JSON.stringify(storeData)}
  }
}
