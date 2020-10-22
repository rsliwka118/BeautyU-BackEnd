import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Salon } from "./Salon"

@Entity({ name: "salonReview" })
export class SalonReview {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userID: string

  @Column()
  review: string

  @Column()
  rate: string

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateAdded: string

  @ManyToOne( type => Salon, salon => salon.reviews)
  salon: Salon;

}