---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3c9be8b71f1de1a71b08850fb4d47a8beed4d6dc6b21260f1a5492bde3ff0459
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUiSession.Dispose
title: EditorUiSession.Dispose
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 42a2066d678f7c72aab2e303e8ac022d9a298b53b2896e1f0d37e3de8cf0d461

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases presentation state after all drawing scopes and domain edit gestures have ended.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.
