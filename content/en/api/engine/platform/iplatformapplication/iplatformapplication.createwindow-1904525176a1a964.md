---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1904525176a1a9648311112b5073c7fdca395d2cf5b951669b9306b4630efba9
symbol: engine:Inno.Platform:M:Inno.Platform.IPlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions)
title: IPlatformApplication.CreateWindow
kind: api
owners:
- Inno.Platform
apiSurface: source-clr
reviewed: 38f48e1a5d395b8392fce6f808545eb380ccf7e324774d59bcc4b0e08ef626eb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The validated initial window properties.

## Returns

The newly created window. The caller may dispose it before disposing the application.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.
