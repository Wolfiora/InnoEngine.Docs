---
uid: api.71cd85ee5bdc2b7fbf8c373edf2f6538081ee83dfaa9f4e8a41684151ba4d34d
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.OnStop(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 0d8b21248803c1ad740ed12417b5762f5d3b019e6379a691f4ccc47c1cbc21ca
title: "OnStop"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Runs before the module generation is released and its disposable instances are destroyed.

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

**Parameter `context`:** The shared editor context for the runtime being stopped.
