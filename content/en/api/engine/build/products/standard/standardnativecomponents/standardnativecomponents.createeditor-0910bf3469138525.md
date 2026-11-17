---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0910bf3469138525394a9b6f4e95f8a5c33c48072c0166a0abf5ea4750e70430
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateEditor(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreateEditor
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
reviewed: 13690eea26d7eaa93e935c2b527d2ff0eb9d560aca332552a763c6594c4d914f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A fresh immutable Editor plan with the ImGuizmo dependency declared explicitly.

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.
