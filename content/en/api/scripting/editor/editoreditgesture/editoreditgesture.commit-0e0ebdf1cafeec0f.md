---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0e0ebdf1cafeec0fa0ec87c44e06739e03be026906ae3164cb240f1273ab3235
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Commit
title: EditorEditGesture.Commit
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 1774d8a895165075188edd2b9b604a550ed8743981608c267c931cc818ce7624
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
