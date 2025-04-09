// src/platforms/misskon.ts
import { BaseMatcher, OriginMeta } from '../platforms';  // 引入 BaseMatcher 類別
import ImageNode from "../img-node";  // 引入 ImageNode 類別
import { Chapter } from "../page-fetcher";  // 引入 Chapter 類別

// 創建 MisskonMatcher 類別並繼承 BaseMatcher
export class MisskonMatcher extends BaseMatcher<any> {

  // 定義平台名稱
  name(): string {
    return "misskon.com";  // 返回網站名稱
  }

  // 第一步：抓取頁面的來源資料
  async fetchPagesSource(chapter: Chapter): AsyncGenerator<Result<any>> {
    // 在這裡撰寫如何從 Misskon 網站抓取頁面資料
    const response = await fetch(chapter.source);
    const pageSource = await response.text();
    yield Result.ok(pageSource);  // 返回抓取的頁面來源
  }

  // 第二步：解析圖片節點
  async parseImgNodes(pageSource: any, chapterID?: number): Promise<ImageNode[]> {
    const imageNodes: ImageNode[] = [];
    const imageUrl = "http://misskon.com/example.jpg";  // 假設解析出來的圖片 URL
    imageNodes.push(new ImageNode(imageUrl));  // 將圖片加入節點
    return imageNodes;
  }

  // 第三步：從圖片節點中獲取原始圖片 URL
  async fetchOriginMeta(node: ImageNode, retry: boolean, chapterID?: number): Promise<OriginMeta> {
    return {
      url: node.url,  // 假設圖片的原
