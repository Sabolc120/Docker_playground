FROM maven:3.9-eclipse-temurin-17 AS build
workdir /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk
workdir /app
copy --from=build /app/target/*.jar app.jar
cmd ["java", "-jar", "app.jar"]
