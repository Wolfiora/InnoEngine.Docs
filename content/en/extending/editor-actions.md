---
exampleMode: host
exampleProjects: [Inno.Editor.Interactions]
title: Register an action and menu
description: Contribute a typed Editor operation through the shared menu, shortcut and toolbar resolver.
uid: extending.editor-actions
kind: how-to
owners: [Inno.Editor.Interactions]
contracts: [api.projects.inno-editor-interactions#generation-and-lifetime-contracts]
---
# Register an action and menu

An action owns an operation; a menu or shortcut presents it. Use the same registration for context menus, ordinary menus and supported toolbar placements so availability, target selection and execution cannot drift apart.

## Prerequisites

Your extension must participate in the Editor's discovered generation. This host example references Core Identity and Editor Interactions. It changes selection only; project-content mutations should use their domain facade and [record History](editor-history.md).

## Define a typed operation

```csharp
using Inno.Core.Identity;
using Inno.Editor.Interactions;

[EditorAction("sample/items/select", "sample/items")]
[EditorMenu("sample/items", "Selection/Select Item", order: 200)]
public sealed class SelectItemAction : EditorAction<IdentityObject>
{
    protected override void Execute(EditorActionContext<IdentityObject> context)
        => context.interactions.For(context.area, context.target).Select();
}
```

Keep stable IDs with the owning feature. Area and action ID are independent; the target's actual type participates in dispatch. Resolution prefers the exact area, then target specificity and priority. Missing or disabled execution returns false. Argument actions validate the actual argument type before dispatch and expose a typed context rather than a raw argument bag.

## Build the menu at the interaction target

```csharp
using Inno.Core.Identity;
using Inno.Editor.Interactions;

internal static class ItemMenu
{
    public static EditorMenuModel Read(
        EditorInteractions interactions,
        IdentityObject target
    ) => interactions.For("sample/items", target).BuildMenu();
}
```

Slash-delimited paths form real submenus. Use `Create/...` for creation commands rather than putting drawn separators or fake hierarchy into a label. `separatorBefore` separates adjacent visible groups; the first visible item in a menu never gets an orphaned leading separator.

For dynamic choices, derive from `EditorMenuSource` and build entries through `EditorMenuBuilder`. A static attribute and a dynamic source are alternative ways to contribute a placement; do not register the same action/position twice. An action's `Query` determines visibility, availability, checked state and dynamic title.

## Share keyboard and toolbar resolution

Shortcut labels and dispatch use the same resolved registration. An action can have several distinct gestures, all dispatchable; the menu displays the first applicable gesture. Exact-area gestures override that registration's global shortcuts. Duplicate gestures in one effective area and equally specific conflicting actions are rejected while building the candidate catalog.

Toolbar models are immutable and contain semantic icons, order, tooltip and action state. Checked state selects the active icon, and a nonempty dynamic display name replaces the static tooltip. Toolbar actions require no target or argument; placement cannot cross an action's declared exact area. The presentation backend maps semantic icons to glyphs.

## Handle operations spanning frames

Use `EditorPresentationAction<TTarget, TPresentation>` for confirmation, rename or preview. `Execute` activates it; the view calls `Present` with typed presentation data. The action completes or cancels the operation. It remains an ordinary action, not a global rename service.

When selection changes, the old target's active presentation loses its view. The default `OnPresentationLost` cancels. An override can validate and complete a temporary value; returning while still active causes cancellation so invisible input does not remain active indefinitely. Execution/presentation failures attempt cancellation, and cancellation failures are reported independently.

Asset opening follows this same path: File Browser identifies a source entry and delegates a stable semantic action such as `editor/open` to its asset owner. Double-click and the menu therefore share execution. Add an asset-specific contribution rather than another renderer type switch.
