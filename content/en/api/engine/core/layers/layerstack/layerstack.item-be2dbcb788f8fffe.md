---
uid: api.be2dbcb788f8fffe2bdbc8be0bec85cee084269bd5ef40bf0f6c813e144743f1
symbol: "engine:Inno.Core.Layers:P:Inno.Core.Layers.LayerStack.Item(System.Int32)"
source: xml
reviewed: e0dbfdb89078d0af312d069e7b1d9e75d715453e3c78be43230cffe095166a58
title: "LayerStack.Item"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Gets the layer at the supplied stack position.

**Parameter `index`:** The zero-based stack position.

**Returns:** The attached layer at the requested position.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `index` is outside the current stack.
