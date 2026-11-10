---
title: Add an Editor panel
description: Register a dockable panel and participate in the Editor's activation, drawing, state and retirement lifecycle.
uid: extending.editor-panels
kind: how-to
owners:
  - Inno.Editor.Core
  - Inno.Editor.Interactions
  - Inno.Editor.ImGui
contracts:
  - architecture.ownership
  - manual.identity-and-missing
---
# Add an Editor panel

An Editor panel is a discovered extension whose lifetime belongs to the Editor host. You provide its identity, content and owned state; the host creates the dockable window, attaches the extension, routes drawing and retires the generation.

This guide describes the current host Editor and ImGui presentation path. A public CLR member is not automatically available to Editor scripts. In particular, the host lifecycle entry points `Attach`, `Draw` and `Detach` are excluded from script projection.

## Prerequisites

Your extension assembly must participate in the current Editor's type discovery and product composition. Adding a class to an arbitrary assembly on disk does not load that assembly into the Editor. Use the existing host or plugin contribution that owns your extension.

Reference `Inno.Editor.Core` for the panel contract. An ImGui panel also needs `Inno.Editor.ImGui` for the active presentation session. Domain state and shared behavior should remain in their existing owners instead of moving into the panel.

## Declare a stable panel identity

Derive from `EditorPanel` and apply `EditorPanelAttribute`. Choose an identity that remains stable when the display title changes. The identity is used for generated menu routing, visibility and state retention.

The following host-side panel displays a hint through the current ImGui session. Compile it in an Editor extension assembly with the references above; it is not a standalone application or a runtime-script example.

```csharp
using Inno.Editor.Core;
using Inno.Editor.ImGui;

[EditorPanel("sample.resource-notes", "Resource Notes", order: 600, menuPath: "Diagnostics")]
internal sealed class ResourceNotesPanel : EditorPanel
{
    protected override void OnDraw(EditorContext context)
    {
        EditorUiSession.current.widgets.Hint("Select a resource to inspect its owner.");
    }
}
```

`menuPath` is a slash-delimited path beneath the generated **Panel** menu. Empty segments are rejected; surrounding segment whitespace is normalized. `separatorBefore` starts a visual group in the final category. `defaultOpen` applies before retained visibility is available.

The current extension generation supplies the menu's checked state from `isOpen`. Do not maintain a second visibility flag for the menu.

## Let the host run the lifecycle

| Callback | Responsibility |
| --- | --- |
| `OnAttach` | Acquire panel-owned resources and subscribe through the appropriate owner. |
| `OnDraw` | Render the current frame using the active presentation session. |
| `OnDetach` | Release subscriptions and owned resources, including partially completed attachment. |

Do not call `Attach`, `Draw` or `Detach` yourself from the extension. `Attach` rejects duplicate attachment. `Draw` rejects an unattached or not-ready instance. Detachment is idempotent after completion and also compensates a failed attachment.

If work is still active, detachment can report `RetirementPendingException`. Keep the panel and its dependencies alive, retain unfinished resources and avoid repeating completed cleanup on a later attempt. The host must retry retirement; it must not release the old generation underneath active work.

An ordinary draw failure closes and quarantines the failing instance for that generation. A pending retirement is not converted into an ordinary draw fault. Quarantine does not excuse a cleanup failure or permit a failed instance to continue capturing state.

## Keep frame resources borrowed

Read `EditorUiSession.current` inside the active draw scope. Do not retain its frame-scoped UI resources, borrowed objects or plugin instances for later frames or generations. Keep persistent identifiers for state that must survive replacement and resolve them through the owning service when needed.

For asynchronous work, use the owning operation's cancellation and retirement protocol. Completion of an ordinary `await` does not establish that execution resumed on the UI owner thread.

## Choose layout behavior

- `useWindowPadding` defaults to `true`. Override it only when the panel deliberately owns edge-to-edge content spacing.
- `allowScrolling` defaults to `true`. A full canvas can return `false` and manage navigation inside its content.
- `initialSize` is an initial floating size in UI coordinates. Zero leaves native auto-sizing in control; a saved layout takes precedence.

Use the shared presentation style for spacing, zoom and colors. Domain logic should not depend on native widget IDs or an ImGui window handle.

## Persist readable project state deliberately

Override protected `Capture(EditorState)` only when the panel owns project state that needs persistence. Panels using the base implementation do not enter state IO and do not create empty state sections. Visibility is persisted separately for every registered panel.

When capture is enabled, `Restore(EditorState)` runs after attachment and before replacement capture. Missing or incompatible values use the fallback supplied to `EditorState.Get`. Only successfully restored instances may capture subsequent state; reentrant discovery during restoration must not write default values over the saved document.

The current host coordinates readable sections and ImGui layout in the same `editor.ini` document. Do not introduce another panel-settings file or a separate writer for that document. Unknown extension sections are retained when an extension is temporarily absent.

## Handle assembly replacement

Implement `IEditorPanelReloadState` only for presentation-neutral state that must transfer across an assembly reload. `CaptureReloadState` returns an immutable byte payload; `RestoreReloadState` consumes it in the replacement generation. The payload must not retain runtime objects, plugin instances or references into the retiring load context.

Reload state transfer and readable project persistence serve different lifetimes. Neither permits a raw native pointer, frame borrow or runtime identity to become durable project state.

## Verify the resulting behavior

Once the owning assembly is discovered, the panel should appear under its declared **Panel** category. Closing the window should update the generated menu check; reopening it should use the same registered identity.

Check attachment failure compensation, draw quarantine, detach retry, state restore/capture and generation replacement in the owning lifecycle tests. Presentation changes also need the appropriate UI coverage. A successful domain test does not certify native window interaction, and a simple style edit does not justify unrelated Build integration tests.

If the panel does not appear, inspect current diagnostics for discovery conflicts or construction failure. If it closes after drawing, inspect the original fault before trying to reopen it. Preserve the first failure rather than repeatedly creating new instances until one appears to work.

## Related guidance

- [Resource ownership](../architecture/ownership.md) explains borrowing and retirement.
- [Identity and Missing states](../manual/identity-and-missing.md) explains durable identity across replacement.
- [Customize Console presentation](customize-console.md) shows a change within an existing panel owner.
- [Read logs and diagnostics](../manual/editor/console.md) explains the distinction between event history and current problems.
