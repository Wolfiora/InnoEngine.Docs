---
exampleMode: host
exampleProjects:
  - Inno.Editor.Interactions
title: Select targets and move data
description: Use generation-aware selection, drag/drop and canvas navigation
  without retaining stale live objects.
uid: extending.editor-selection
kind: how-to
owners:
  - Inno.Editor.Interactions
contracts:
  - manual.identity-and-missing
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# Select targets and move data

Editor interactions carry identity across deferred input and generation changes. Views identify their area and actual target; the shared interaction owner resolves the current object before use. Persisting a raw live object in UI state can otherwise keep an old plugin generation alive.

## Select and focus through the shared action path

```csharp
using Inno.Core.Identity;
using Inno.Editor.Interactions;

internal static class ItemSelection
{
    public static void Select(EditorInteractions interactions, IdentityObject target)
    {
        EditorInteraction row = interactions.For("sample/items", target);
        row.Focus();
        row.Select();
    }
}
```

`Select` uses the built-in action queue and generation rules. The selection state exposes reads and typed resolution without a public mutator that bypasses those rules. Host infrastructure replacing object instances atomically can use the narrower `IEditorSelectionCoordinator`; an ordinary panel should not need it.

Ordered multiselection retains identity order, a primary item, anchor and change counter. Range selection follows the current visible order; the platform's toggle/range modifiers control individual changes and expansion. Snapshots retain identities rather than live objects. Missing identities remain present; they are not silently treated as an empty selection.

## Keep the original identity domain

Across frames, store full `RuntimeIdentity` and resolve it through `EditorInteractions.TryResolveIdentity`. A Scene, Asset, Graph or Play allocator is not interchangeable with whichever allocator is currently ambient. An Inspector lock retains its original domain and persistent ID, rebinding only within that domain after a runtime slot retires. A non-identity collectible plugin object can be held only weakly.

Selection and focus are session state, not `editor.ini` data. Project restoration does not automatically recreate a selection from the Scene list. Retiring collectible targets are cleared; identity targets can be rebound by persistent ID during the next update when resolution succeeds.

## Move identity, not a managed pointer

`EditorDragData` accepts an identity object and display label but stores only its runtime identity and text. Preview and delivery both resolve the source again in its registered domain. Native payload bytes carry the domain-local runtime ID; they are not a managed-object lookup token.

A generation change, source removal, domain mismatch or successful delivery ends the drag. Persisted changes and History use persistent identity instead. A drop handler queries accept/reject status and returns a typed result; actual moves, copies and insertions belong to the domain mutation facade and History.

## Navigate a canvas

`EditorPlanarNavigation` is the presentation-independent input state machine shared by Scene and graph canvases. Coordinates are logical pixels; the backend converts framebuffer DPI.

Call `Update` every frame with global button-down state, even after the pointer leaves the canvas. Hover starts middle-button or allowed Alt-primary panning; global release ends capture. `Cancel` handles Escape, document loss or canvas closure. Disabling Alt-primary leaves it available for another operation such as orbit while retaining middle-button panning.

`WheelFactor` calculates finite exponential zoom and rejects non-finite input or nonpositive sensitivity. `ZoomOrigin` keeps the content under the cursor fixed and rejects invalid scale values. Panning/zoom are view state, not data History. The helper does not own live Scene/graph objects or replace node-drag, orbit or flight state machines.
