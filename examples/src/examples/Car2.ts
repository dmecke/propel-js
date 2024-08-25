import { physics } from "../../../dist/index.js";

// jointed car
export function car2Init() {
    const world = physics.createWorld({ x: 0, y: 300 });
    world.damp = 0.99;

    const friction = 0.5;

    let rect = physics.createRectangle(world, { x: 150, y: 80 }, 350, 30, 0, friction, 0);
    physics.rotateBody(rect, Math.PI / 12);
    physics.addBody(world, rect);
    rect = physics.createRectangle(world, { x: 350, y: 250 }, 350, 30, 0, friction, 0);
    physics.rotateBody(rect, -Math.PI / 12);
    physics.addBody(world, rect);
    rect = physics.createRectangle(world, { x: 150, y: 420 }, 400, 30, 0, friction, 0);
    physics.rotateBody(rect, Math.PI / 8);
    physics.addBody(world, rect);

    const circle1 = physics.createCircle(world, { x: 80, y: 0 }, 15, 3, friction, 0);
    physics.addBody(world, circle1);
    const circle2 = physics.createCircle(world, { x: 120, y: 0 }, 15, 3, friction, 0);
    physics.addBody(world, circle2);

    const leftAnchor = physics.createCircleShape(world, { x: 80, y: 0 }, 3);
    const rightAnchor = physics.createCircleShape(world, { x: 120, y: 0 }, 3);
    const base = physics.createRectangleShape(world, { x: 100, y: 0 }, 60, 5, 0);
    const chassis = physics.createRigidBody(world, { x: 100, y: 0 }, 1, friction, 0, [base, leftAnchor, rightAnchor]);
    physics.addBody(world, chassis);
    physics.excludeCollisions(world, chassis, circle1);
    physics.excludeCollisions(world, chassis, circle2);
    physics.createJoint(world, circle1, leftAnchor, 1, 0);
    physics.createJoint(world, circle2, rightAnchor, 1, 0);


    physics.rotateBody(chassis, Math.PI / 8);
    return world;
}