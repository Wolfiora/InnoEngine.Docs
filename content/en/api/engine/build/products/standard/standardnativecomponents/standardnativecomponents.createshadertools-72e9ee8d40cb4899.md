---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.72e9ee8d40cb4899edabbefc643bce77573b05fa3af725a452c9254d16c91498
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateShaderTools(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreateShaderTools
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
reviewed: fbbe6cc7c3871a6617e6b94e3d0e0111a508f7fd115a69344db8f4fe2e815616
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

An immutable tool product without runtime or Editor presentation dependencies.

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
