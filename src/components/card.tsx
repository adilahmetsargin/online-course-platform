import { Card as MantineCard, Image, Text, Button, Group } from "@mantine/core";
import { type Course } from "@prisma/client";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
      <MantineCard.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </MantineCard.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{course.title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {course.description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Manage
      </Button>
    </MantineCard>
  );
};

export default CourseCard;
