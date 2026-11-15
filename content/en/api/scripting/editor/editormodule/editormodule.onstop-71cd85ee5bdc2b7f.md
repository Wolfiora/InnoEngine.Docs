---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.71cd85ee5bdc2b7fbf8c373edf2f6538081ee83dfaa9f4e8a41684151ba4d34d
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: fdbcab743a01d65560e551f3775be5e1eb538a7abe1a6a31722b98525ab97516
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.
