---
uid: api.4a7a53c987846a4b30e74c336c9487ff3def98be67478c001d4f7988903418cd
symbol: "engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreatePlayer(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})"
source: xml
reviewed: 4d5cd481a2db5eddbcf271f144dba79a5b338641a23ea5bd7a372331cf9a95af
title: "CreatePlayer"
kind: api
owners: [Inno.Build.Products.Standard]
apiSurface: source-clr
---

Composes the standard Player's reusable native components with explicit deployment policies.

**Returns:** A fresh immutable Player plan without resolving tools or touching source files.

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
