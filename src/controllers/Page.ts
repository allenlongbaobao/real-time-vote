import { Controller, Get, IContext, Post, BadRequest } from "@aotools/valka"

@Controller()
export class PageController {

  @Get("/error", "error.html")
  public async error(ctx: IContext) {
    return {}
  }

  @Get("/vote", "index.html")
  public async mainPage(ctx: IContext) {
    return { title: "投票页面" }
  }

  @Get("/show", "show.html")
  public async showPage(ctx: IContext) {
    return { title: "展示页面"}
  }
}
