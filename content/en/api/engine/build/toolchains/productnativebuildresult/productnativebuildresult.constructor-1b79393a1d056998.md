---
uid: api.1b79393a1d056998a3058226e4644ef99f2a2af8a57810ae0c40f4a55d6905c6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildResult.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.NativeBindingGenerationResult,System.String)"
source: xml
reviewed: b06e64ea3346c31b974f20fb3968384badd1df128a2ae75915c0dc75e0d96132
title: "ProductNativeBuildResult.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Takes ownership of a complete native and binding closure.

**Parameter `products`:** Owned products in dependency order.

**Parameter `bindings`:** The owned matching binding batch.

**Parameter `aggregateDirectory`:** A complete aggregate install directory, or null for individual products.
