---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4a7a53c987846a4b30e74c336c9487ff3def98be67478c001d4f7988903418cd
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreatePlayer(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreatePlayer
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
reviewed: e7910747ced28e31d50f1f1f4be1992b0af01910100660d60a67f259c82d0eed
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A fresh immutable Player plan without resolving tools or touching source files.

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
