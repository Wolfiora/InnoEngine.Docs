---
uid: api.0910bf3469138525394a9b6f4e95f8a5c33c48072c0166a0abf5ea4750e70430
symbol: "engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateEditor(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})"
source: xml
reviewed: fec4d607eeaa119195b7697574c3cb281cf942e1de6a1100b67f37ad814f366d
title: "StandardNativeComponents.CreateEditor"
kind: api
owners: [Inno.Build.Products.Standard]
apiSurface: source-clr
---

Composes the shared runtime closure and the Editor's presentation and authoring tools.

**Returns:** A fresh immutable Editor plan with the ImGuizmo dependency declared explicitly.

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
