# B-Market - 高级集市商店系统

## 插件简介
B-Market是一个功能强大的集市商店系统，为服务器提供了一个完整的玩家交易平台。玩家可以开设自己的店铺，上架商品，进行买卖交易，管理员可以对整个市场进行监管。

## 主要功能
### 玩家功能
- 创建个人店铺
  - 自定义店铺名称和宣传语
  - 设置店铺营业状态
  - 查看店铺访问量、交易次数、营业额等数据
- 商品管理
  - 单个/批量上架商品
  - 自定义商品价格和备注
  - 下架商品
  - 修改商品信息
- 购物功能
  - 浏览所有店铺
  - 搜索商品
  - 查看商品详细信息
  - 购买商品

### 管理员功能
- 市场监管
  - 查看所有店铺商品
  - 搜索商品
  - 批量下架商品
  - 修改商品价格和备注
  - 查看交易记录
- 违规处理
  - 下架违规商品
  - 通知店主
  - 记录管理操作

## 指令列表
- `/market` 或 `/mk` - 打开集市主菜单
- `/marketadmin` 或 `/mka` - 打开管理员菜单（需要管理员权限）

## 特色功能
1. 界面美观：采用表单界面，操作简单直观
2. 数据完整：记录详细的交易数据和店铺信息
3. 安全可靠：防止物品复制，保护玩家财产
4. 管理便捷：提供完整的管理功能，维护市场秩序
5. 实时通知：重要操作会通知相关玩家

## 使用说明
### 开店流程
1. 输入`/mk`打开集市菜单
2. 选择"创建店铺"
3. 设置店铺名称和宣传语
4. 支付开店费用
5. 开始上架商品经营

### 购物流程
1. 输入`/mk`打开集市菜单
2. 浏览店铺或搜索商品
3. 选择想要购买的商品
4. 输入购买数量
5. 确认购买

### 管理流程
1. 输入`/mka`打开管理菜单
2. 选择要执行的管理操作
3. 按照提示完成操作
4. 系统会自动通知相关玩家

## 配置说明
插件配置文件位于`plugins/B-Market/config.json`，可以设置：
- 开店费用
- 禁止交易的物品
- 其他系统参数

## 注意事项
1. 请确保服务器已安装GMLIB-LegacyRemoteCallApi
2. 需要配置经济系统（LLMoney或记分板）
3. 建议定期备份数据文件
4. 管理员在下架商品时需要填写原因

## 更新计划
- [ ] 添加店铺排行榜
- [ ] 支持更多经济系统
- [ ] 增加更多商品展示效果
- [ ] 优化搜索功能
- [ ] 添加更多管理工具

## 问题反馈
如果在使用过程中遇到任何问题，请通过以下方式反馈：
1. 在MineBBS本帖下方评论
2. 通过QQ联系作者
3. 在Github提交Issue

## 版权信息
- 作者：[BlackCat,铭记mingji]
- 开源协议：GPL-3.0
- 严禁倒卖或未经授权的修改发布

## 赞助支持
如果您觉得这个插件对您有帮助，欢迎赞助支持作者继续更新维护。

## 致谢
感谢所有为本插件提供建议和反馈的用户。
