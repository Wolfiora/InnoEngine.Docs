---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.71cd85ee5bdc2b7fbf8c373edf2f6538081ee83dfaa9f4e8a41684151ba4d34d
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 8d936bd0d7223b885f97fe939384993eb8064ca961fd1f12f595ed5745e8320b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.
