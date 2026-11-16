---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9f491604de0ae7fce05fb5539bbd8569f64266e1a5c525c661d4d2073f3fcf54
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.RegisterContributor(Inno.Rendering.IRenderFrameGraphContributor)
title: RenderRuntime.RegisterContributor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 85ad549b9f6c7e2d8d88aaaac96de171dab12f4dc7a8134aebfc181ccadff86d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `contributor`:** Contributor invoked after all user pipeline requests.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the instance is already registered.

**Exception `T:System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.
