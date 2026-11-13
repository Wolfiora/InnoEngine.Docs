---
uid: api.9769c699a0739eca1b330bc5bb4d61c44d12bdcd128c1c11635cf84a783fa2c6
symbol: "engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateStaticPlayer(System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})"
source: xml
reviewed: e65ab1efa3e5916f8e6b9d5022c6df466527a369a96a9d776b7e1ca56417d859
title: "CreateStaticPlayer"
kind: api
owners: [Inno.Build.Products.Standard]
apiSurface: source-clr
---

Declares the real static component closure consumed by an explicit aggregate executor.

**Returns:** A Player closure with static recipes and no unused standalone producers.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
