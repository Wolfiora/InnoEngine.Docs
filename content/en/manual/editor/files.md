---
title: Browse and change project assets
description: Navigate writable project sources and read-only plugins while
  preserving source identity and undo.
uid: manual.editor.files
kind: how-to
owners:
  - Inno.Editor.Panel.FileBrowser
  - Inno.Editor.Assets
  - Inno.Editor.Assets.ImGui
contracts:
  - project.inno-editor-panel-filebrowser
  - project.inno-editor-assets
  - project.inno-editor-assets-imgui
---
# Browse and change project assets

File Browser presents the same source identities in Tree, List and Grid views. Use it to navigate, select, open, rename, create and move assets. Asset services own the file transactions and History; the panel does not maintain a second asset database.

## Choose Assets or Plugins

The tree's root-switch button changes between writable Project Assets and read-only installed Plugins. Each root remembers its last location. Empty virtual roots remain expandable navigation containers; they are not selectable assets. Click an ordinary directory to select it and double-click to enter it. Expanding a tree and selecting content are separate actions.

Plugin roots identify active catalog mounts, displayed as IPLUGIN/IPlugin rather than ordinary directories or invented companion assets. Real entries use full source-qualified AssetPath identities, so identical local paths in two plugins do not collide. Only activated `.iplugin` packages appear; folders and zip files are not alternate installation forms.

Installed content can be browsed, searched, opened and dragged as a read-only source. It cannot receive create/rename/move/delete/save/drop mutations. Plugin lifecycle is controlled by the existing environment and candidate transaction, with errors in Console—not by a browser trust or package-management button. Installing code grants project-script execution privileges; collectible loading is not a sandbox.

## Create and open content

The Create menu combines Folder and registered asset templates under their declared categories. Creating a source goes through the asset edit owner, imports/selects it and starts inline Rename. Shader creation/copy/subgraph extraction uses the same reversible source creation, preserving the created `.imeta` identity through undo/redo.

Double-click invokes the asset's Open behavior. Scene open is dispatched through the shared semantic action and can activate an existing scene rather than adding another copy. Creating Material uses its own template and explicit Shader selection. [Asset browser extensions](../../extending/asset-browser.md) explain how features contribute behavior without modifying the panel.

## Rename intentionally

Use the context menu or F2; single/delayed clicks do not start file rename. The input appears in the keyboard-focused Tree/List/Grid region. Newly created folders/assets enter the same flow. File rename preserves the final extension: `Tool.editor.cs` edits `Tool.editor`, while `.cs` remains. Directories edit the full name.

Enter commits, Escape cancels, and losing focus or changing selection commits a valid name and ends the gesture. An invalid name keeps the old value and ends the edit. The action owns validation/state; views only present it. Clicking empty content background clears asset selection.

## Move without changing identity

Drag files or directories between views onto an explicit directory target. Tree's Assets root or empty tree background targets the Assets root; empty List/Grid background targets their current directory. There is no guessed fallback target.

The transaction validates destination existence, conflicts, self/descendant moves and extension rules. Moving into the current parent is a no-op without History. A directory moves atomically through AssetPipeline, preserving children and metadata instead of copying/reimporting each identity. Selection changes only after commit.

Undo payloads retain source bytes, directory shape and `.imeta` where needed. Large data uses the owned History archive; restoration validates a complete temporary candidate before committing and rescanning. External conflicts fail without overwriting files or moving the History stack. Loaded clean scenes follow committed source relocation without gaining a dirty marker.

## Import an installed sample

Project folders beginning with `~` are ordinary writable development sources and can compile/play, though excluded from Player deployment. In installed plugins, those subtrees are sample content awaiting import and do not join the plugin's active compilation.

Import Sample writes a stable candidate to `Assets/<original-name>`, retaining all leading tildes. An existing destination disables the operation. Copying, identity remapping, preimport, script preflight and History encoding run under the existing transaction; active catalogs/identities remain unchanged until success. One directory operation enters undo/redo.

The shared progress modal supports cancellation. Shutdown retains tasks, snapshots and dependencies while cancellation is pending; timeout faults rather than releasing active inputs. Successful publication includes History recording, not a second private undo queue. See [sample import](../assets/import-samples.md).

## Understand saved UI state

Browser state retains active root and source-qualified navigation positions. Panel state retains view mode, filtering, splitter/grid scale and list columns. Selection is session-only. A removed plugin returns its view to the read-only overview without losing the last writable Assets location; that location remains the fallback for saving a new Scene.

Each tree/list/breadcrumb region scrolls only for real overflow. Shared rename/drop feedback respects foreground hit testing and the current viewport. Icons come from the same Settings-aware registry used by Inspector; different panels do not maintain independent extension switches.
