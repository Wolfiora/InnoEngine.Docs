---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-inspection-native-tests
symbol: project:Inno.Editor.Inspection.Native.Tests
title: Inno.Editor.Inspection.Native.Tests
kind: project
owners:
- Inno.Editor.Inspection.Native.Tests
sourceFingerprint: 31b361edff60888c36762d2d7c837f7af5021666162b648d4a55b984bec75e6d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify predicate-selected peers and rejection of real ambiguity.
outdated: false
---
# Inno.Editor.Inspection.Native.Tests

`Inno.Editor.Inspection.Native.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

ConditionalInspectorPeersResolveByPredicateAndRejectActualAmbiguity checks that inspection peers resolve through their declared predicates while actual ambiguity fails. This contract is distinct from rendering Inspector widgets or exercising native layout.

## Environment and execution

The project declares the `contract` layer. Use the declared inspection and discovery references. Keep predicate selection and ambiguity assertions at the public boundary; native layout remains with its actual presentation owner.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/framework/Inno.Editor.Inspection.Native.Tests/Inno.Editor.Inspection.Native.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Conditional Inspection

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/framework/Inno.Editor.Inspection.Native.Tests/ConditionalInspectionTests.cs). Representative entry points:

- `ConditionalInspectorPeersResolveByPredicateAndRejectActualAmbiguity`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
