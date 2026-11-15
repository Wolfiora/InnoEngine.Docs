---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e324d320efdade05a30fbc2b8644a18bb46ed6889bd3b74806885b6889b6554d
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.OnRenamed(InnoEditor.Assets.AssetEditorContext,System.String,System.String)
title: AssetEditor.OnRenamed
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
reviewed: da38307a3eac116c8f3ca338420af49110b167d8bf8fa6a595e28d66dceca12a
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Runs after an asset move transaction commits successfully.

## Parameters

**Parameter `context`:** The immutable snapshot captured before the move.

**Parameter `oldPath`:** The previous source-relative path.

**Parameter `newPath`:** The committed source-relative destination path.
