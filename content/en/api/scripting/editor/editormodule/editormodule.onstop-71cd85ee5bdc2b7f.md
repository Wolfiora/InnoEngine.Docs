---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.71cd85ee5bdc2b7fbf8c373edf2f6538081ee83dfaa9f4e8a41684151ba4d34d
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: b9c979ef6c1c32dd16376a3386cbc87f19feb7736f7e29e29d73d0a7b7abec19
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.
