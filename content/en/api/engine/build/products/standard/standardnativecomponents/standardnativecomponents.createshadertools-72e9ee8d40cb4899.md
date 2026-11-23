---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.72e9ee8d40cb4899edabbefc643bce77573b05fa3af725a452c9254d16c91498
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateShaderTools(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreateShaderTools
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
sourceFingerprint: 7db3793f862f9a8eaf0ce1b7aff8e4dae9b57b2aa7dd8e02cc3e7877a667545c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.

## Returns

An immutable tool product without runtime or Editor presentation dependencies.
