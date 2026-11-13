---
uid: api.1b79393a1d056998a3058226e4644ef99f2a2af8a57810ae0c40f4a55d6905c6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.NativeBindingGenerationResult,System.String)"
source: xml
reviewed: 495164c69f3098311f3b81ebfe0b3cdfaa905e76ea729698fe5bfdbe2545c2a3
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Takes ownership of a complete native and binding closure.

**Parameter `products`:** Owned products in dependency order.

**Parameter `bindings`:** The owned matching binding batch.

**Parameter `aggregateDirectory`:** A complete aggregate install directory, or null for individual products.
